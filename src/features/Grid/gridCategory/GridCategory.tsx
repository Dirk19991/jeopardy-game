import { StyledGridCategory } from './GridCategoryStyles';

interface GridCategoryProps {
  title?: string;
}

function GridCategory({ title }: GridCategoryProps) {
  const capitalizedTitle = title?.toUpperCase();
  return <StyledGridCategory>{capitalizedTitle}</StyledGridCategory>;
}

export default GridCategory;
