import article from "@/data/__article.json"

const Content = () => {
    return (
        <>
            <div className="container">
                <div className="py-12 md:px-20 lg:px-40 px-0">
                    <div className="bg-white p-4">
                        <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Content;