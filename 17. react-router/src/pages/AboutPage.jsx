import React from "react";
import classes from "./AboutPage.module.css";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className={classes.div}>
      <p>
        Edmond Dantès (pronounced [ɛd.mɔ̃ dɑ̃.tɛs]) is a title character, Byronic
        hero and the protagonist of Alexandre Dumas's 1844 adventure novel The
        Count of Monte Cristo. Within the story's narrative, Dantès is an
        intelligent, honest and loving man who turns bitter and vengeful after
        he is framed for a crime he did not commit. When Dantès finds himself
        free and enormously wealthy, he takes it upon himself to reward those
        who have helped him in his plight and punish those responsible for his
        years of suffering. He is known by the aliases The Count of Monte Cristo
        (French: le Comte de Monte-Cristo), Sinbad the Sailor (Sinbad le Marin),
        Abbé Busoni and Lord Wilmore
      </p>
      <h1>Some Facts About Edmond Dantès</h1>
      <h2> <Link to={'1'}>Dantès, first mate</Link> </h2>
      <h2> <Link to={'2'}>The engagement and the arrest</Link> </h2>
      <h2> <Link to={'3'}>Despair and near-suicide</Link> </h2>
      <h2> <Link to={'4'}>Edmond and the Abbé</Link> </h2>
    </div>
  );
};

export default AboutPage;
