import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  document: {
    fontSize: 10,
    fontFamily: 'Helvetica',
  },
  page: {
    padding: 40,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 12,
    marginBottom: 10,
    color: '#333',
  },
  contactInfo: {
    fontSize: 9,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
  },
  card: {
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  cardTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  cardSubtitle: {
    fontSize: 9,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 10,
    lineHeight: 1.4,
    marginBottom: 5,
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillBadge: {
    fontSize: 9,
    backgroundColor: '#f0f0f0',
    padding: '4 8',
    borderRadius: 3,
  },
  bulletList: {
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  bulletItem: {
    fontSize: 9,
    marginBottom: 4,
    lineHeight: 1.3,
  },
  metaInfo: {
    fontSize: 9,
    color: '#666',
    marginTop: 5,
  },
  footer: {
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 0.5,
    borderTopColor: '#ddd',
    textAlign: 'center',
    fontSize: 9,
    color: '#666',
  },
});

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>Rufas Mugo Ndaba</Text>
        <Text style={styles.title}>IT Graduate | Full Stack Developer</Text>
        <View style={styles.contactInfo}>
          <Text>mugorufas072@gmail.com</Text>
          <Text>0792560641</Text>
          <Text>Kutus, Kirinyaga</Text>
          <Text>linkedin.com/in/rufas-ndaba</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <View style={styles.card}>
          <Text style={styles.cardDescription}>
            Enthusiastic IT graduate with a strong foundation in software development, web technologies, and system design. Passionate about creating innovative solutions and eager to contribute to dynamic development teams. Proficient in multiple programming languages and frameworks with hands-on experience in full-stack development.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Bachelor of Science in Information Technology</Text>
          <Text style={styles.cardSubtitle}>Kirinyaga University • Graduation: 2026</Text>
          <Text style={styles.cardDescription}>
            Completed comprehensive coursework in software development, database management, web technologies, and software engineering principles. GPA: 3.8/4.0
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.skillsContainer}>
          {['JavaScript', 'React', 'React Native', 'HTML/CSS', 'Python', 'Java', 'Node.js', 'Express.js', 'SQL', 'MongoDB', 'Firebase', 'Git & GitHub', 'REST APIs', 'GraphQL', 'Bootstrap', 'Tailwind CSS', 'Responsive Design', 'UI/UX Design', 'Agile/Scrum', 'Database Design', 'Web Security', 'Performance Optimization'].map((skill, idx) => (
            <Text key={idx} style={styles.skillBadge}>{skill}</Text>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Technova - E-Commerce Electronics Platform</Text>
          <Text style={styles.cardSubtitle}>Full Stack Web Application</Text>
          <Text style={styles.cardDescription}>
            Developed Technova, a complete e-commerce platform specializing in electronics sales. Built with React, Node.js, and MongoDB, featuring user authentication, product catalog, shopping cart, and payment integration.
          </Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>• Designed responsive UI with glassmorphism design patterns</Text>
            <Text style={styles.bulletItem}>• Built RESTful APIs for product and order management</Text>
            <Text style={styles.bulletItem}>• Implemented JWT authentication and authorization</Text>
            <Text style={styles.bulletItem}>• Integrated payment processing for electronics transactions</Text>
            <Text style={styles.bulletItem}>• Created inventory management system</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Potato Farming Guide</Text>
          <Text style={styles.cardSubtitle}>Agriculture Advisory Web App</Text>
          <Text style={styles.cardDescription}>
            Built a research-backed agriculture app to help Kenyan potato farmers with planting, crop care, harvesting, and pest management. Includes live market price tracking, local weather intelligence, and expert advice.
          </Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>• Implemented live market price dashboard for potatoes across major Kenyan cities</Text>
            <Text style={styles.bulletItem}>• Integrated weather-based farming recommendations for irrigation and fertilization</Text>
            <Text style={styles.bulletItem}>• Created detailed crop guides for planting, care, harvest, and pest management</Text>
            <Text style={styles.bulletItem}>• Built a responsive UI with easy navigation for farmers and advisors</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Maize Farming Guide</Text>
          <Text style={styles.cardSubtitle}>Agriculture Advisory Web App</Text>
          <Text style={styles.cardDescription}>
            Built an agriculture app for Kenyan maize farmers with research-backed guidance on planting, care, harvesting, and pest management. Features live market pricing, weather-based recommendations, and AI-powered expert assistance.
          </Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>• Implemented live market price tracking for maize across Kenyan cities</Text>
            <Text style={styles.bulletItem}>• Integrated smart weather-based farming intelligence and recommendations</Text>
            <Text style={styles.bulletItem}>• Created comprehensive guides for planting, crop care, harvesting, and pest defense</Text>
            <Text style={styles.bulletItem}>• Built responsive UI with audio guidance features for farmers</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Internship - Web Developer</Text>
          <Text style={styles.cardSubtitle}>Tech Company Name</Text>
          <Text style={styles.metaInfo}>Jan 2025 - Dec 2025</Text>
          <Text style={styles.cardDescription}>
            Gained hands-on experience in web development and worked on real-world projects.
          </Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>• Collaborated with senior developers on feature development</Text>
            <Text style={styles.bulletItem}>• Participated in code reviews and agile sprint planning</Text>
            <Text style={styles.bulletItem}>• Fixed bugs and optimized existing codebase</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        <View style={styles.card}>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>• React Developer Certification - Online Platform</Text>
            <Text style={styles.bulletItem}>• Full Stack Web Development - Bootcamp</Text>
            <Text style={styles.bulletItem}>• Google Cloud Fundamentals - Cloud Computing Basics</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text>© 2026 Rufas Mugo Ndaba. All rights reserved.</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
