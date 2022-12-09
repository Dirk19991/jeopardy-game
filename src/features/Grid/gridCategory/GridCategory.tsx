import { StyledGridCategory } from './GridCategoryStyles';

interface GridCategoryProps {
  title?: string;
}

function GridCategory({ title }: GridCategoryProps) {
  const capitalizedTitle = title?.toUpperCase();
  const hasLongWords = capitalizedTitle
    ?.split(' ')
    .some((elem) => elem.length >= 9);

  return (
    <StyledGridCategory hasLongWords={hasLongWords}>
      {capitalizedTitle}
    </StyledGridCategory>
  );
}

export default GridCategory;
