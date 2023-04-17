
const ExampleSection = () => {
  return (
    <section >
        <h2 className="heading2 text-slate-200 py-6 text-center">
            Examples:
        </h2>
        <div className=" rounded-md bg-gray-400 p-3 text-sm py-4 my-2">
            <p>POST /orders/</p>
            <p>Authorization: Bearer &lt;TOKEN&gt;</p>
            <p>&#123;</p>
            <p> &quot;bookId&quot;: &quot;1&quot;,</p>
            <p> &quot;customerName&quot;: &quot;John&quot;</p>
            <p>&#125;</p>
        </div>

        <div className=" rounded-md bg-gray-400 p-3 text-sm py-4 my-2">
            <p>PATCH /orders/dfkj34</p>
            <p>Authorization: Bearer &lt;TOKEN&gt;</p>
            <p>&#123;</p>
            <p> &quot;customerName&quot;: &quot;John&quot;</p>
            <p>&#125;</p>
        </div>
        <div className=" rounded-md bg-gray-400 p-3 text-sm py-4 my-2">
            <p>DELETE /orders/dfkj34</p>
            <p>Authorization: Bearer &lt;TOKEN&gt;</p>
        </div>
        <div className=" rounded-md bg-gray-400 p-3 text-sm py-4 my-2">
            <p>POST /api-clients/</p>
            <p>Authorization: Bearer &lt;TOKEN&gt;</p>
            <p>&#123;</p>
            <p> &quot;clientName&quot;: &quot;user&quot;,</p>
            <p> &quot;clientEmail&quot;: &quot;test@test.com&quot;</p>
            <p>&#125;</p>
        </div>
    </section>
  )
}

export default ExampleSection