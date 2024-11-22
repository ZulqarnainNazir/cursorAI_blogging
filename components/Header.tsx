import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-700">
            Cool Blog
          </Link>
          <div>
            <Link href="/new-post" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              New Post
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

