import { useRouter } from "next/router";

import { Button } from "@mui/material";
import styles from "../styles/Home.module.css"

export default function Home({ name, summary }) {
  const router = useRouter();

  return (
    <section className={styles.Home}>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.summary}>{summary}</div>
      <div>
          <Button 
           variant="contained" 
           size="large" 
           onClick={()=> router.push("/projects")}> Projects</Button>
      </div>
    </section>
  )
  
}

export async function getStaticProps(){
  return {
    props: {
      name: "Jonathan Reyes",
      summary: "im a fullstack developer and software developer engineer in test"
    }
  };
}