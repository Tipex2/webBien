
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Users, Zap, Layers, Package, Settings, Code } from 'lucide-react';

const InfoPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  
  const processSteps = [
    {
      title: "Automated Robotic Station",
      description: "Automatress is a robotic station for the automated industrial process of laying and gluing the different layers that make up mattresses. The task is based on manual production borrowed from the sleep industry.",
      altText: "",
      imageText: "",
      imageUrl: "https://i.ibb.co/svJ2PrKS/image-Photoroom-5.png"
    },
    {
      title: "Industrial Robots",
      description: <div><p style={{ marginBottom: '1.5em' }}>At Automattress, we use two industrial robots that operate synchronously in the assembly cell. The KUKA KR 100-2 PA palletizing robot transports the layers, moving along an external axis that allows it to reach the materials placed on the pallets. One by one, it transports the layers corresponding to the selected model and stacks them on a table.</p><p> </p><p> The second robot, a KUKA KR 20 R3100, is an anthropomorphic robot located next to the table. It is responsible for depositing the adhesive between the layers to form a solid core.</p></div>,
      altText: "",
      imageText: "",
      imageUrl: "https://i.ibb.co/Y4fKyWqf/robots.png"
    },
    {
      title: "Custom Needle Tool",
      description: "A needle tool with six modules measuring 1000 x 500 mm has been developed for this station. Its function is to ensure a firm grip on the sheets. It is located on the mounting flange of the palletizing robot.",
      altText: "",
      imageText: "",
      imageUrl: "https://i.ibb.co/YBQXjWHk/Miembros-del-proyecto-3-Photoroom.png"
    },
    {
      title: "Extensible Design",
      description: "Three different types of mattresses can be manufactured in the example we developed. However, thanks to its design, a greater number of models can be added by extending the outer axis and adding pallets with new layers.",
      altText: "",
      imageText: "",
      imageUrl: "https://i.ibb.co/nN6jhB1J/image.png"
    },
    {
      title: "Customizable Mattress Sizes",
      description: "The project is also equipped to manufacture any mattress size thanks to its piston and guillotine system that cuts the cores to the desired size.",
      altText: "",
      imageText: "",
      imageUrl: "https://i.ibb.co/h1RGNmYK/image-removebg-preview-11.png"
    }
  ];

  const mattressTypes = [
    {
      name: "JustSleep",
      description:     <div>
      <p style={{ marginBottom: '1em' }}>
        1. Stretch upper fabric, 300 g/m² polyester
      </p>
      <p style={{ marginBottom: '1em' }}>
        2. 3 cm of AirMax 25 kg/m³
      </p>
      <p style={{ marginBottom: '1em' }}>
        3. 4 cm of viscoelastic Memory Sleep, 50 kg/m³
      </p>
      <p style={{ marginBottom: '1em' }}>
        4. 18 cm of HR 30 kg/m³. Support and durability
      </p>
      <p>
        5. Breathable 3D polyester lower fabric
      </p>
    </div>,
      altText: "",
      imageText: "",
      imageUrl: "https://i.ibb.co/QFNh6Nvg/Captura-de-pantalla-2025-05-24-173353.png"
    },
    {
      name: "Chipre",
      description: 
    <div>
      <p style={{ marginBottom: '1em' }}>
        1.- Tejido Strech con Viscosa 330 g/m² con Sanitized
      </p>
      <p style={{ marginBottom: '1em' }}>
        2.- Acolchado de 2,5 cm supersuave y fibra de 200 gr
      </p>
      <p style={{ marginBottom: '1em' }}>
        3.- 4 cm de Viscoelástica Sensus de 65 kg de densidad
      </p>
      <p style={{ marginBottom: '1em' }}>
        4.- 16 cm de HR de Poliuretano 30 kg/m³
      </p>
      <p>
        5.- Tejido inferior 3D transpirable Poliéster
      </p>
    </div>,
      altText: "",
      imageText: "",
      imageUrl: "https://i.ibb.co/4BmcSnx/Captura-de-pantalla-2025-05-24-173403.png"
    },
    {
      name: "Oximax",
      description: <div>
      <p style={{ marginBottom: '1em' }}>
        1.- Tejido superior Strech 250 g/m² Poliéster con Sanitized
      </p>
      <p style={{ marginBottom: '1em' }}>
        2.- Acolchado de 2,5 cm de Airsystem supersuave
      </p>
      <p style={{ marginBottom: '1em' }}>
        3.- 4 cm de AirFit
      </p>
      <p style={{ marginBottom: '1em' }}>
        4.- 23 cm de HR de Poliuretano 30 kg/m³
      </p>
      <p>
        5.- Tejido inferior 3D transpirable Poliéster
      </p>
    </div>,
      altText: "",
      imageText: "",
      imageUrl: "https://i.ibb.co/YFdhT8V9/Captura-de-pantalla-2025-05-24-173411.png"
    }
  ];

  const teamMembers = [
    { name: "Sergio Alfonso Navarro", role: "", altText: "", imageText: "", imageUrl: "https://i.ibb.co/pjZ0mvwt/Captura-de-pantalla-2025-05-24-173129.png" },
    { name: "Rubén Castro Ruiz", role: "", altText: "", imageText: "", imageUrl: "https://i.ibb.co/35VC1YtZ/Captura-de-pantalla-2025-05-24-173138.png" },
    { name: "Pablo Cobo Peris", role: "", altText: "", imageText: "", imageUrl: "https://i.ibb.co/3Y0cy0K8/Captura-de-pantalla-2025-05-24-173144.png" },
    { name: "Pablo Escriche Casero", role: "", altText: "", imageText: "", imageUrl: "https://i.ibb.co/qLrSN2vM/Captura-de-pantalla-2025-05-24-173150.png" }
  ];

  const techLogos = [
    { name: "MaxColchon", altText: "React Logo", imageUrl: "https://lesabelles.net/web/wp-content/uploads/2024/02/logo-maxcolchon-png-e1548247923832.png" },
    { name: "RoboDK", altText: "Vite Logo", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VbpgN6e3YEejeGgsdsBxQKPW079ZzOuLMg&s" },
    { name: "KUKA", altText: "TailwindCSS Logo", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/KUKA_Logo_800x260.png/1200px-KUKA_Logo_800x260.png" },
    { name: "Espressif", altText: "Framer Motion Logo", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Y7rnv3rFIgxF28eohT_axZ2DUiM9LjLxng&s" },
    { name: "UPV", altText: "MQTT Protocol Logo", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/UPV_Logo.png/960px-UPV_Logo.png"},
    { name: "ETSINF", altText: "Node.js Logo", imageUrl: "https://widsvalencia.vlctechhub.org/assets/images/2019/logo_etsinf.png" },
    { name: "Arduino", altText: "Express Logo", imageUrl: "https://cdn.freebiesupply.com/logos/large/2x/arduino-1-logo-png-transparent.png" },
    { name: "Python", altText: "PostgreSQL Logo", imageUrl: "https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png" },
    { name: "Blender", altText: "Docker Logo", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png" }
  ];;

  return (
    <div className="bg-background text-foreground min-h-screen">
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="py-12 md:py-20 bg-gradient-to-br from-secondary via-background to-background"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.p
            className="text-sm font-semibold text-primary tracking-wider mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            PR2 - A03
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, type: 'spring', stiffness: 100 }}
          >
            AUTOMATRESS
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl text-muted-foreground mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Automated mattress core cell
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-primary mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          />
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="py-12 md:py-16"
      >
        <div className="container mx-auto px-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 mb-12 md:mb-16 p-6 rounded-xl bg-card shadow-lg border border-border`}
            >
              <div className="md:w-1/2 w-full">
                <img  
                  className="w-full h-auto rounded-lg object-cover shadow-md border border-border"
                  alt={step.altText}
                  src={step.imageUrl} />
              </div>
              <div className="md:w-1/2 w-full">
                <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="py-12 md:py-16 bg-secondary"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10 md:mb-12">Our mattress models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mattressTypes.map((mattress, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full flex flex-col overflow-hidden transform hover:scale-105 transition-transform duration-300 bg-card border-border">
                  <div className="w-full h-56">
                    <img  
                      className="w-full h-full object-cover"
                      alt={mattress.altText}
                      src={mattress.imageUrl}/>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{mattress.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">{mattress.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="py-12 md:py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10 md:mb-12">Meet our team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center overflow-hidden transform hover:shadow-2xl transition-shadow duration-300 bg-card border-border">
                  <div className="w-full h-64 bg-gradient-to-br from-primary/80 to-accent flex items-center justify-center">
                     <img  
                        className="w-40 h-40 rounded-full object-cover border-4 border-background shadow-lg"
                        alt={member.altText}
                        src={member.imageUrl} />
                  </div>
                  <CardContent className="pt-6 pb-4">
                    <h4 className="text-lg font-semibold text-foreground">{member.name}</h4>
                    <p className="text-sm text-primary">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="py-12 md:py-16 bg-secondary"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10 md:mb-12">Apps used</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {techLogos.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center p-4 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-border"
                title={tech.name}
              >
                <img src={tech.imageUrl} alt={tech.altText} className="w-16 h-16 object-contain mb-2" />
                <p className="mt-2 text-sm text-muted-foreground">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <footer className="py-8 bg-primary text-primary-foreground text-center">
        <p>&copy; {new Date().getFullYear()}</p>
        <p className="text-xs mt-1"></p>
      </footer>
    </div>
  );
};

export default InfoPage;
