import ReactMarkdown from "react-markdown";

function DomeRecipe({ recipeText }) {
    return (
        <section
        className="mt-4 suggested-recipe-container"
        aria-live="polite"
        style={{ maxWidth: "700px", margin: "0 auto" }}
        >
            <h2 className="mb-3 text-center fs-4 fw-semibold">
                🍽️ <span className="text-primary">Chef Dome raccomanda:</span>
            </h2>
            <article className="recipe-content bg-white p-4 rounded shadow-sm border">
                <ReactMarkdown
                components={{
                    p: ({ node, ...props }) => (
                    <p className="mb-3 text-secondary" {...props} />
                    ),
                    li: ({ node, ...props }) => (
                    <li className="mb-2" {...props} />
                    ),
                    h1: ({ node, ...props }) => (
                    <h3 className="mt-3 mb-2 text-primary fw-bold" {...props} />
                    ),
                    h2: ({ node, ...props }) => (
                    <h4 className="mt-3 mb-2 text-primary fw-semibold" {...props} />
                    ),
                    code: ({ node, ...props }) => (
                    <code className="bg-light px-1 rounded" {...props} />
                    ),
                }}
                >
                {recipeText}
                </ReactMarkdown>
            </article>
        </section>
    );
}

export default DomeRecipe;
