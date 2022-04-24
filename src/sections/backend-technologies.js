/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
// placeholder assets
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';
// technology icons
import node_logo from 'assets/key-feature/node-logo.png';
import mongodb_logo from 'assets/key-feature/mongodb-logo.png';
import sql_logo from 'assets/key-feature/sql-logo.png';
import csharp_logo from 'assets/key-feature/csharp-logo.png';


const data = [
  {
    id: 1,
    imgSrc: node_logo,
    altText: 'Node.JS',
    title: 'Node.JS',
    text:
      'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.',
  },
  {
    id: 2,
    imgSrc: mongodb_logo,
    altText: 'MongoDB',
    title: 'MongoDB',
    text:
      'MongoDB is a document-oriented database which stores data in JSON-like documents with dynamic schema.',
  },
  {
    id: 3,
    imgSrc: sql_logo,
    altText: 'Microsoft SQL Server',
    title: 'Microsoft SQL Server',
    text:
      'Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications—which may run either on the same computer or on another computer across a network.',
  },
  {
    id: 4,
    imgSrc: csharp_logo,
    altText: '.NET Framework',
    title: 'C# .NET',
    text:
      'The .NET Framework is a software framework developed by Microsoft that runs primarily on Microsoft Windows. It includes a large class library called Framework Class Library and provides language interoperability across several programming languages.',
  },
];

export default function Feature() {
  return (
    <section id='backend' sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="Back End Technologies"
          title="I'm proficient in current back end technologies."
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
