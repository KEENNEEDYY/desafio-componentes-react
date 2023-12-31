import './styles.css';

import CatalogCard from '../../components/CatalogCard';

export default function Catalog() {
    return(
        <>
            <main className="ctop-catalog-main">
                <section id="ctop-catalog-section" className="ctop-container">
                    <div className="ctop-catalog-title">
                        <h1>Venha nos visitar</h1>
                    </div>
                    <div className="ctop-catalog-cards-container">
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                    </div>
                </section>
                <section id="ctop-comments-section" className="ctop-container">
                    <div>
                        Comments Section
                    </div>
                </section>
            </main>
        </>
    )
}