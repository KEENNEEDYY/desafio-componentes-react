import './styles.css';

import CatalogCard from '../../components/CatalogCard';
import CommentCard from '../../components/CommentCard';

export default function Catalog() {
    return(
        <>
            <main className="ctop-catalog-main ctop-align-itens">
                <section id="ctop-catalog-section" className="ctop-container">
                    <div className="ctop-catalog-title">
                        <h1>Venha nos visitar</h1>
                    </div>
                    <div className="ctop-align-itens">
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                    </div>
                </section>
                <section id="ctop-comments-section" className="ctop-container">
                    <div className="ctop-catalog-title">
                        <h1>O que estão dizendo</h1>
                    </div>
                    <div className="ctop-align-itens">
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                    </div>
                </section>
            </main>
        </>
    )
}