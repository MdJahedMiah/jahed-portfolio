import Bio from "../../components/Bio/Bio"
import DownloadCV from "../../components/DownloadCV/DownloadCV"
import Education from "../../components/Education/Education"
import WorkExperience from "../../components/WorkExperience/WorkExperience"

const About = () => {
  return (
    <div>
      <Bio/>
      <WorkExperience/>
      <Education/>
      <DownloadCV/>
    </div>
  )
}

export default About
