import FakeBlogs from 'data/fake-blogs.json'

import { useEffect } from 'react'

import { BlogCard } from 'components/blog/blog-card'

const blogsData = FakeBlogs.blogsData

export const Blogs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <main className='overflow-hidden pt-6 lg:pt-[70px]'>
      <h1
        className='px-6 text-left text-xl font-bold leading-[42px] 
        text-primary lg:text-center lg:text-[40px] lg:leading-[50px]'
      >
        Technology Blog
      </h1>

      <section className='relative mt-4 lg:mt-[59px]'>
        <div
          className='absolute -right-11 -top-[109px] hidden aspect-square w-[292px] 
          rounded-full bg-secondary lg:block'
        ></div>
        <div
          className='absolute -left-[89px] top-[284px] aspect-square w-[292px] rounded-full 
          bg-primary lg:-left-[102px] lg:top-[388px]'
        ></div>

        <article className='grid grid-cols-1 gap-4 px-6 lg:grid-cols-3 lg:gap-[46px] lg:px-20'>
          {blogsData.map((_) => (
            <BlogCard data={_} />
          ))}
        </article>
      </section>
    </main>
  )
}
