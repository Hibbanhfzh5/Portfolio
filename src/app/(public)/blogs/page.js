"use client"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const CardItem = ({ title }) => {
  return (
    <div className="cursor-pointer hover:drop-shadow-lg drop-shadow-md bg-gradient-to-r from-gray-700 to-gray-900 w-[100px] rounded-lg">
      <div className="flex justify-center">
        <img 
          className="h-[100px] rounded-full border-2 border-white"
          src="/images/icon.png" 
        />
      </div>
      <div className="p-4 bg-gray-800 rounded-b-lg">
        <div className="text-[18px] truncate text-white">{title}</div>
      </div>
    </div>
  )
}

export default function Blogs() {
  const router = useRouter();
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("");

  const onFetchBlogs = async () => {
    try {
      setLoading(true)
      let res = await fetch('/api/blogs')
      let data = await res.json()
      setData(data.data)
      setLoading(false)
    } catch (err) {
      console.log('err', err)
      setData([])
      setLoading(false)
    }
  }

  useEffect(() => {
    onFetchBlogs()
  }, [])

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?query=${searchTerm}`);
  }

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white p-8">
      <h2 className="text-center text-5xl font-bold w-full mt-24 text-gray-800">Blog Hibban</h2>
      <p className="text-center margin-0 mx-auto w-3/6 text-gray-600">
        Cari Artikelmu disini
      </p>

      {/* Start Search Box */}
      <form onSubmit={handleSearchSubmit} className="flex items-center justify-center my-3 bg-gray-200 rounded-lg shadow-lg p-2">
        <div className="relative w-full max-w-2xl my-2">
          <input 
            type="search" 
            name="blogsearch"
            className="block w-full p-6 pl-10 text-lg text-gray-900 border border-gray-300 rounded-xl bg-white focus:ring-indigo-500 focus:border-indigo-500" 
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            required 
          />
        </div>
      </form>
      {/* End Search Box */}

      <div className="flex justify-center gap-32 flex-wrap">
        {filteredData.map((item, key) => (
          <div 
            onClick={() => router.push(`/blogs/${item._id}`)} 
            key={key}
          > 
            <CardItem 
              className="m-5 p-4" 
              title={item.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}