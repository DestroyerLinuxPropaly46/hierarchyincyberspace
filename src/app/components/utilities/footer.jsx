import Link from 'next/link'

export default function page() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="headerf">
                    <div className="img">
                        <img src="/hic.png" alt="HIC" />
                    </div>
                    <div className="h-text">
                        <h2>Hierarchy I<span className="text-gradient">n Cyberspace</span></h2>
                        <p>Modern Warship Clan, Make your day better in our clan, play together and destroy enemies!.</p>
                    </div>
                </div>
                <div className="content">
                    <div className="list">
                        <ul>
                            <li><Link href={'#home'}>Home</Link></li>
                            <li><Link href={'#about'}>About</Link></li>
                            <li><Link href={'#team'}>Team</Link></li>
                            <li><Link href={'#community'}>Community</Link></li>
                            <li><Link href={'#contact'}>Contact</Link></li>
                            <li><Link href={'#login'}>Login</Link></li>
                        </ul>
                    </div>

                    <div className="more-list">
                        <ul>
                            <li><Link href={'https://fkzproject.my.id'}>fkzproject.my.id</Link></li>
                            <li><Link href={'#faq'}>FaQ</Link></li>
                            <li><Link href={'#rules'}>Rules</Link></li>
                            <li><Link href={'#about'}>Stats</Link></li>
                        </ul>                        
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; Copyright 2025 Fkzproject, All right reserved</p>
            </div>
        </footer>
    )   
}