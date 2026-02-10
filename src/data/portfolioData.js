/**
 * PORTFOLIO DATA FILE
 *
 * This file contains ALL the text, links, and content for your portfolio.
 * To update your portfolio, simply edit the values in this file.
 *
 * EDITING GUIDE:
 * - Personal Info: Update name, title, bio, location
 * - Social Links: Change URLs to your actual profiles
 * - Skills: Add/remove items from the arrays
 * - Projects: Add/remove project objects
 * - Contact: Update email and social links
 */

const portfolioData = {
  // ============================================
  // PERSONAL INFORMATION
  // Edit these to change your name, title, and bio
  // ============================================
  personal: {
    name: "Praveen Chourasia",
    title: "Robotics Software Engineer",
    subtitle: "AI | ROS2 | Computer Vision",
    location: "Chennai, India",
    bio: "Passionate robotics engineer specializing in autonomous systems, computer vision, and AI integration. I build intelligent robots that perceive, navigate, and interact with the world.",
    resume: "/resume.pdf", // Add your resume PDF to the public folder
  },

  // ============================================
  // SOCIAL LINKS
  // Replace these URLs with your actual social media profiles
  // ============================================
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "praveen@example.com",
  },

  // ============================================
  // ABOUT SECTION
  // Edit this to change the about me section
  // ============================================
  about: {
    description: [
      "I'm a robotics software engineer with a passion for building intelligent autonomous systems. My expertise spans ROS2, computer vision, and AI integration, enabling robots to understand and interact with their environment.",
      "With a strong foundation in both software engineering and robotics, I bridge the gap between theoretical concepts and real-world applications. I thrive on solving complex problems in perception, navigation, and control systems.",
    ],
    image: "/praveenpic.jpeg", // Add your profile image to the public folder
  },

  // ============================================
  // SKILLS
  // Add or remove skills in each category
  // ============================================
  skills: {
    robotics: [
      "ROS2",
      "Robot Operating System",
      "Path Planning",
      "SLAM",
      "Navigation",
      "Control Systems",
      "Gazebo Simulation",
      "MoveIt",
    ],
    ai: [
      "Computer Vision",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "PyTorch",
      "YOLO",
      "Object Detection",
      "Image Processing",
    ],
    programming: [
      "Python",
      "C++",
      "JavaScript",
      "Embedded Systems",
      "Linux",
      "Git",
      "Docker",
      "CI/CD",
    ],
    hardware: [
      "Intel RealSense",
      "LiDAR",
      "IMU Sensors",
      "Motor Controllers",
      "Raspberry Pi",
      "Arduino",
      "Jetson Nano",
      "Camera Systems",
    ],
  },

  // ============================================
  // PROJECTS
  // Add or remove project objects to update your portfolio
  // Each project should have: title, description, tech, image, github, demo
  // ============================================
  projects: [
    {
      id: 1,
      title: "Autonomous Underwater Vehicle",
      description:
        "Developed a fully autonomous underwater vehicle using ROS2 for deep-sea exploration. Implemented advanced navigation algorithms, sensor fusion, and real-time control systems. The AUV can perform autonomous missions including object detection and environmental mapping.",
      tech: ["ROS2", "Python", "C++", "Computer Vision", "Sensor Fusion", "Path Planning"],
      image: "/projects/auv.jpg", // Add project images to public/projects/
      github: "https://github.com/yourusername/auv-project",
      demo: "https://yourdemo.com",
      featured: true,
    },
    {
      id: 2,
      title: "Drone Food Delivery System",
      description:
        "Engineered an autonomous drone delivery system with computer vision-based landing and precision payload deployment. Integrated GPS navigation, obstacle avoidance, and real-time telemetry. Successfully completed over 100 test flights with 99% delivery accuracy.",
      tech: ["ROS2", "OpenCV", "PX4", "MAVLink", "Python", "GPS Navigation"],
      image: "/projects/drone.jpg",
      github: "https://github.com/yourusername/drone-delivery",
      demo: "https://yourdemo.com",
      featured: true,
    },
    {
      id: 3,
      title: "RealSense + YOLO Vision System",
      description:
        "Built a real-time object detection and depth estimation system combining Intel RealSense cameras with YOLO deep learning models. The system provides accurate 3D localization of objects for robotic manipulation tasks with sub-centimeter precision.",
      tech: ["Intel RealSense", "YOLO", "Python", "OpenCV", "Deep Learning", "ROS2"],
      image: "/projects/vision.jpg",
      github: "https://github.com/yourusername/vision-system",
      demo: "https://yourdemo.com",
      featured: true,
    },
    // Add more projects by copying the structure above
    // {
    //   id: 4,
    //   title: "Your New Project",
    //   description: "Project description here...",
    //   tech: ["Tech1", "Tech2", "Tech3"],
    //   image: "/projects/your-image.jpg",
    //   github: "https://github.com/yourusername/project",
    //   demo: "https://yourdemo.com",
    //   featured: false,
    // },
  ],

  // ============================================
  // CONTACT INFORMATION
  // Update your email and add a contact message
  // ============================================
  contact: {
    email: "praveen@example.com",
    message:
      "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
  },
};

export default portfolioData;