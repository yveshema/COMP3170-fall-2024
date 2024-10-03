import {
  Box,
  Flex,
  Text,
  Heading,
  List,
  ListItem,
  ListIcon,
  Link,
} from '@chakra-ui/react';

import { MdCheckCircle } from 'react-icons/md';

import Header from './components/Header';
import Hero from './components/Hero';
import Achievement from './components/Achievement';
import Project from './components/Project';
import ContactForm from './components/ContactForm';

function App({ data }) {

  const {bio, jobs, achievements, projects } = data;

  const aboutMeContent = bio.content.map((para, index) => <Text key={index} fontSize="lg" mt={4}>{para}</Text>);

  const workHistoryList = jobs.map((job, index) => (
    <ListItem key={index} fontSize="lg">
      <ListIcon as={MdCheckCircle} color="green.500" />
      {job}
    </ListItem>
  ));

  const AchievementList = achievements.map(achievement => <Achievement key={achievement.title} {...achievement} />);

  const projectList = projects.map(project => <Project key={project.title} {...project} />);


  return (
      <Box>
        <Header {...bio} />
        <Box w="80%" m="auto" mt={20}>
          <Hero {...bio} />

          <section id="about">
            <Heading as="h2" mt={8}>About me</Heading>
            {aboutMeContent}

          </section>

          <section id="what-i-do">
            <Heading as="h2" mt={8}>What I do</Heading>
            <List spacing={4} mt={8}>
              {workHistoryList}
            </List>
          </section>

          <section id="achievements">
            <Heading as="h2" mt={8}>Achievements</Heading>
            {AchievementList}
          </section>

          <section id="projects">
            <Heading as="h2" mt={8}>Projects</Heading>
            {projectList}
          </section>

          <section id="contact-form">
            <Heading as="h2" mt={8} mb={8}>Get in touch</Heading>
            <ContactForm />
          </section>

          <footer id="footer"
                  style={{
                    padding: '2em',
                    // background: '#141414',
                    // color: 'white',
                    borderTop: '1px solid #eee',
                    marginTop: '4em',
                  }}
          >
            <Flex justify="center" gap="1em">
              <Link href="/" fontSize="sm">Privacy policy</Link>
              <Link href="/" fontSize="sm">Terms</Link>
            </Flex>
            <Text align="center" fontSize="sm">Copyright@John Doe, 2024</Text>
          </footer>
        </Box>
        

        
      </Box>
  );
}

export default App;
