import { createClient } from '@supabase/supabase-js'
import Header from '../../../components/Header'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

async function getPost(id: string) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    console.error('Error fetching post:', error)
    return null
  }
  return data
}

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPost(params.id)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={post.image_url || '/placeholder.svg?height=400&width=800'} alt={post.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-600 mb-4">{new Date(post.created_at).toLocaleDateString()}</p>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </main>
    </div>
  )
}

