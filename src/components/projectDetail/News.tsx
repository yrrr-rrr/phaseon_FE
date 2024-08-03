import { useNavigate } from 'react-router-dom';
import { NewsItem } from '../../interface';
import * as s from '../../style/projectDetail/NewsStyle';

export default function News({ data, projectName }: { data: NewsItem[]; projectName: string }) {
  const navigate = useNavigate();
  return (
    <section>
      <s.TitleBox>
        <s.Title>News</s.Title>
        <s.ShortDescription>{`${projectName}의 보도자료`}</s.ShortDescription>
      </s.TitleBox>
      {data.map((newsObj, index) => (
        <s.NewsBox
          key={newsObj.title + index}
          onClick={() => {
            window.open(newsObj.link);
          }}
        >
          <s.NewsImg src={newsObj.img} alt="" />
          <s.NewsTextBox>
            <s.NewsTitle>{newsObj.title}</s.NewsTitle>
            <s.NewsContent>{newsObj.content}</s.NewsContent>
          </s.NewsTextBox>
        </s.NewsBox>
      ))}
    </section>
  );
}
