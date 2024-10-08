import { fetchPostsByTopicSlug } from '@/db/queries/posts'
import PostCreateForm from '@/components/posts/PostCreateForm'
import PostList from '@/components/posts/PostList'

interface TopicShowPageProps {
  params: {
    slug: string
  }
}

export default function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = params

  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      <div className='col-span-3'>
        <h2 className='text-2xl font-bold mb-2'>
          {slug}
        </h2>
        <PostList fetchData={() => fetchPostsByTopicSlug(slug)}/>
      </div>

      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  )
}