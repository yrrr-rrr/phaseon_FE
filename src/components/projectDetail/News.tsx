import { AccomplishmentObj } from '@/interface';
import * as s from '@/style/projectDetail/NewsStyle';

export default function News({ data, projectName }: { data: AccomplishmentObj[]; projectName: string }) {
  return (
    <s.PaddingBox>
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
          <s.NewsImg src={newsObj.thumbnail} alt="" />
          <s.NewsTextBox>
            <s.NewsTitle>{newsObj.title}</s.NewsTitle>
            <s.NewsContent>{newsObj.description}</s.NewsContent>
          </s.NewsTextBox>
        </s.NewsBox>
      ))}
    </s.PaddingBox>
  );
}
