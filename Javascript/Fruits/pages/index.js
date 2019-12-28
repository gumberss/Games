import Link from 'next/link';

const Index = () => (
    <div>
        <p>Hello Next.js</p>
        <Link href="/about">
            <a>About Page</a>
        </Link>
    </div>
);

export default Index;