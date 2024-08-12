import { CTAbtn } from './CTAbtn';
import { Logo } from './Logo';

export const Navbar = () => {
  return (
    <div className="flex justify-between px-16 pt-6 pb-1 bg-black">
      <div>
        <Logo />
      </div>
      <div>
        <CTAbtn title={'Login'} />
      </div>
    </div>
  );
};
