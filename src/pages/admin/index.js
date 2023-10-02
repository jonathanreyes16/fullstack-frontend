import PageDescription from "@/components/PageDescription";
import ProjectItem from "@/components/ProjectItem";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/projects");
      const responseJson = await response.json();
      setProjects(responseJson);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <PageDescription
        title="Admin"
        description="Here you well be able to add and update your projects."
      />
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Button variant="contained" size="large">
          Add new Project
        </Button>
      </div>

      {projects.map((project) => (
        <ProjectItem key={project._id} project={project} />
      ))}
    </section>
  );
}
