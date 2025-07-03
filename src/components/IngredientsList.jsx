function IngredientList(props) {
    const ingredientsListItems = props.ingredients.map((ingredient) => (
        <li key={ingredient}>
            <span className="badge bg-secondary text-white px-3 py-2 rounded-pill shadow-sm">
                {ingredient}
            </span>
        </li>
    ));

    return (
        <section>
            <h2 className="text-center mb-3 fw-bold text-primary">🛒 Ingredienti in tuo possesso</h2>
            <ul
                className="ingredient-list d-flex flex-wrap justify-content-center list-unstyled gap-2"
                aria-live="polite"
            >
                    {ingredientsListItems}
            </ul>

        {props.ingredients.length > 3 && (
            <div className="d-flex justify-content-center">
                <div className="get-recipe-container mt-5 d-flex justify-content-center align-items-center gap-5 rounded shadow p-3">
                    <div>
                        <h3>Pronto per una ricetta?</h3>
                        <h5>
                        Scopri nuove idee gustose generate in base agli ingredienti che hai a disposizione{' '}
                            <i className="bi bi-arrow-right fs-5 ms-2" aria-hidden="true"></i>
                        </h5>
                    </div>
                    <button
                        onClick={props.toggleAndGenerateRecipe}
                        className="btn btn-recipe"
                        type="button"
                        >
                        Ottieni ricetta
                    </button>
                </div>
            </div>
        )}
        </section>
    );
}

export default IngredientList;
