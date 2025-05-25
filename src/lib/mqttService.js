
import mqtt from 'mqtt';

const MQTT_BROKER_HOST = "localhost"
const MQTT_PORT = 9001; 
const MQTT_BASE_TOPIC = "PR2/EIB007/salida";

const MQTT_BROKER_URL = "wss://ce15-84-127-42-28.ngrok-free.app";

export const sendMqttMessage = (messagePayload) => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      console.warn("MQTT client can only run in the browser environment.");
      return reject(new Error("MQTT client can only run in the browser environment."));
    }

    let client;
    const messageString = typeof messagePayload === 'string' ? messagePayload : JSON.stringify(messagePayload);

    try {
      client = mqtt.connect(MQTT_BROKER_URL, {
        keepalive: 60,
        reconnectPeriod: 1000,
        connectTimeout: 20 * 1000, 
        clientId: `mqttjs_${Math.random().toString(16).substr(2, 8)}`,
        protocolVersion: 4, 
        clean: true,
      });
    } catch (error) {
      console.error("MQTT connection initialization error:", error);
      return reject(error);
    }
    
    let publishAttempted = false;

    const cleanupAndEnd = (errorToRejectWith, isSuccess = false) => {
      if (client) {
        client.removeListener('connect', onConnect);
        client.removeListener('error', onError);
        client.removeListener('offline', onOffline);
        client.removeListener('end', onEnd);
        
        const endClientCallback = () => {
          if (errorToRejectWith) {
            reject(errorToRejectWith);
          } else {
            resolve();
          }
        };

        if (client.connected || client.connecting) {
          client.end(false, endClientCallback); 
        } else {
          endClientCallback();
        }
      } else {
        if (errorToRejectWith) {
          reject(errorToRejectWith);
        } else {
          resolve();
        }
      }
    };

    const onConnect = () => {
      console.log('Connected to MQTT broker via WebSocket');
      publishAttempted = true;
      client.publish(MQTT_BASE_TOPIC, messageString, { qos: 1, retain: false }, (error) => {
        if (error) {
          console.error('MQTT publish error:', error);
          cleanupAndEnd(new Error(`MQTT publish error: ${error.message}`), false);
        } else {
          console.log(`Message published to ${MQTT_BASE_TOPIC}: ${messageString}`);
          cleanupAndEnd(null, true); 
        }
      });
    };

    const onError = (error) => {
      console.error('MQTT connection error:', error.message);
      if (!publishAttempted) {
        cleanupAndEnd(new Error(`MQTT connection error: ${error.message}`), false);
      }
    };

    const onOffline = () => {
      console.log('MQTT client is offline');
      if (!publishAttempted) {
        cleanupAndEnd(new Error('MQTT client went offline before attempting publish.'), false);
      }
    };
    
    const onEnd = () => {
        console.log('MQTT client connection ended.');
    };
    
    client.on('connect', onConnect);
    client.on('error', onError);
    client.on('offline', onOffline);
    client.on('end', onEnd);

  });
};
