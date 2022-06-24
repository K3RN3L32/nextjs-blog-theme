import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <img className="<img border=0" alt="VestigeLogo" src="https://vetric.wtf/images/VestigeLogoV.png" width="100" height="100" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
