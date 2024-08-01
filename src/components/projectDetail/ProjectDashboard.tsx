import { useContext } from 'react';
import * as s from '../../style/projectDetail/ProjectDashboardStyle';
import { CategoryContext } from '../../context/CategoryContext';
import ProjectInfo from './ProjectInfo';

export default function ProjectDashboard() {
  const { currentCategory, setCurrentCategory } = useContext(CategoryContext);
  const categories = [
    { text: '프로젝트 정보', id: 'information' },
    { text: '출시', id: 'release' },
    { text: '성과', id: 'performance' },
    { text: '팀 소개', id: 'introduction' },
  ];
  return (
    <s.Section>
      <s.CategoryBox>
        {categories.map((obj, n) => (
          <s.CategoryText
            key={obj.id + n}
            $id={obj.id}
            $currentCategory={currentCategory}
            onClick={() => {
              setCurrentCategory(obj.id);
            }}
          >
            {obj.text}
          </s.CategoryText>
        ))}
      </s.CategoryBox>
      {currentCategory == 'information' && <ProjectInfo />}
    </s.Section>
  );
}
