export default function TabularData() {
    const entryPoint = "https://bookstore-test-api-by-sadya.vercel.app/";
    const data = [
      {
        action: "Status",
        endpoint: "api/status",
        method: "GET",
        auth: "Not Required",
        url: `${entryPoint}api/status`,
      },
      {
        action: "Get Books",
        endpoint: "api/books",
        method: "GET",
        auth: "Not Required",
        url: `${entryPoint}api/books`,
      },
      {
        action: "Get Specific books",
        endpoint: "api/books/:bookId",
        method: "GET",
        auth: "Not Required",
        url: `${entryPoint}api/books/:bookId`,
      },
      {
        action: "Book by type or limit",
        endpoint: "api/books?limit=2&type=fiction",
        method: "GET",
        auth: "Not Required",
        url: `${entryPoint}api/books?limit=2&type=fiction`,
      },
      {
        action: "Authorization",
        endpoint: "api/api-clients",
        method: "POST",
        auth: "Not Required",
        url: `${entryPoint}api/api-clients`,
      },
      {
        action: "Get Orders",
        endpoint: "api/orders",
        method: "GET",
        auth: "Required",
        url: `${entryPoint}api/orders`,
      },
      {
        action: "Check Specific Order",
        endpoint: "api/orders/:orderId",
        method: "GET",
        auth: "Required",
        url: `${entryPoint}api/orders/:orderId`,
      },
      {
        action: "Place Order",
        endpoint: "api/orders",
        method: "POST",
        auth: "Required",
        url: `${entryPoint}api/orders`,
      },
      {
        action: "Delete an Order",
        endpoint: "api/orders/:orderId",
        method: "DELETE",
        auth: "Required",
        url: `${entryPoint}api/orders/:orderId`,
      },
      {
        action: "Update an Order",
        endpoint: "api/orders/:orderId",
        method: "Update",
        auth: "Required",
        url: `${entryPoint}api/orders/:orderId`,
      },
    ];
    return (
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                API EndPoints
              </th>
              <th scope="col" className="px-6 py-3">
                Methods
              </th>
              <th scope="col" className="px-6 py-3">
                Authentication
              </th>
              <th scope="col" className="px-6 py-3">
                URL
              </th>
            </tr>
          </thead>
          <tbody>
            
              {data.map((d) => (
                <tr key={d.action} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-base"
                  >
                    {d.action}
                  </th>
                  <td className="px-6 py-4">{d.endpoint}</td>
                  <td className="px-6 py-4">{d.method}</td>
                  <td className="px-6 py-4">{d.auth}</td>
                  <td className="px-6 py-4">
                    <a
                      href={d.url}
                      target="_blank"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Connect
                    </a>
                  </td>
                  </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
  