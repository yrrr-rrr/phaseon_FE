import { NewsItem } from '@/interface';
import * as s from '@/style/projectDetail/NewsStyle';

export default function News({ data }: { data: NewsItem[] }) {
  return (
    <s.PaddingBox>
      <s.TitleBox>
        <s.Title>보도자료</s.Title>
        <s.ShortDescription>관련 기사 모음</s.ShortDescription>
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
    </s.PaddingBox>
  );
}
