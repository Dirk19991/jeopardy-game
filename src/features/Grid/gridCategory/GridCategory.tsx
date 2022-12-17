import { StyledGridCategory } from './GridCategoryStyles';

interface GridCategoryProps {
  title?: string;
}

function GridCategory({ title }: GridCategoryProps) {
  const capitalizedTitle = title?.toUpperCase();

  // уменьшаем шрифт, если названия тем слишком длинные - для того, чтоб табло не "дергалось" часто при загрузке новых вопросов
  let hasLongWords;
  let hasManyWords;

  if (capitalizedTitle) {
    hasLongWords = capitalizedTitle.split(' ').some((elem) => elem.length >= 9);
    hasManyWords = capitalizedTitle.split(' ').length > 3 ? true : false;
  }

  return (
    <StyledGridCategory hasLongWords={hasLongWords} hasManyWords={hasManyWords}>
      {' '}
      {capitalizedTitle}
    </StyledGridCategory>
  );
}

export default GridCategory;
