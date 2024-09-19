import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContext } from '@/context/MainContext';
import * as s from '@/style/main/AllProjectsStyle';
import { ReactComponent as Star } from '../../assets/svg/FillStar.svg';
import { ReactComponent as Medal } from '../../assets/svg/Medal.svg';
import { ReactComponent as Member } from '../../assets/svg/Member.svg';

export default function AllProjects() {
  const { project } = useContext(MainContext);
  const navigate = useNavigate();
  return (
    <s.ProjectContainer>
      {project &&
        project.data.projects.map((projectObj, idx) => (
          <s.ProjectBox
            key={idx}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
              navigate(projectObj.param.toLowerCase());
            }}
          >
            <s.Img src={projectObj.img} alt="" />
            <div>
              <s.ProjectName>Project Name</s.ProjectName>
              <s.InpoBox>
                <s.IconBox>
                  <Star fill="#FFCC00" />
                  <p>{projectObj.star}</p>
                </s.IconBox>
                <s.IconBox>
                  <Medal />
                  <p>{projectObj.performance}</p>
                </s.IconBox>
                <s.IconBox>
                  <Member fill="#69ACFF" width={16} height={12} />
                  <p>{projectObj.member}</p>
                </s.IconBox>
              </s.InpoBox>
              <s.CategoryBox>
                {projectObj.category.map((categoryText, idx2) => (
                  <p key={idx2 + categoryText}>{categoryText}</p>
                ))}
              </s.CategoryBox>
            </div>
          </s.ProjectBox>
        ))}
    </s.ProjectContainer>
  );
}
