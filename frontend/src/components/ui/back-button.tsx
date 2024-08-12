import { Link } from 'react-router-dom';
import { Button } from './button';

interface BackButtonProps {
  label: string;
  href: string;
}

const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Button variant={'link'} size={'sm'} asChild className="font-normal w-full">
      <Link to={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
