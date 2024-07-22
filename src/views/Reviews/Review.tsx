import { useState, type Dispatch } from 'react'
import StarRating from './Rating'
import { reviews, type IReview } from './reviewList'

export const Review = ({lenguage}: {lenguage: "spanish" | "english"}) => {
  const [showModal, setShowModal] = useState(false)
  const reviewListShort = reviews.slice(0, 3)
  return (
    <div className="w-full py-8 bg-sky-100 mt-6">
      <header className="w-full flex items-center gap-2 pl-4 max-w-3xl m-auto mb-8">
        <div className="w-10 h-1 bg-slate-800 rounded-sm"></div>
        <h2 className="text-xl font-bold">{lenguage === "spanish" ? "Opiniones y testimonios" :"Opinions and comments"}</h2>
      </header>
      <section className="w-full lg:pl-4 flex flex-col p-4 lg:flex-row items-center gap-2 max-w-6xl m-auto">
        {reviewListShort.map((el) => {
          return <ReviewElement data={el} key={el.profileURL} />
        })}
      </section>
      <div className="w-full pr-6 lg:pl-4 flex items-center gap-2 max-w-6xl m-auto mt-4 lg:mt-9">
        <div className="w-full flex justify-end">
          <button className="underline" onClick={() => setShowModal(true)}>
            {lenguage === "spanish" ? "Ver todos los testimonios" : "See all comments"}
          </button>
        </div>
      </div>
      {showModal && (
        <CommentList comments={reviews} setShowModal={setShowModal} lenguage={lenguage} />
      )}
    </div>
  )
}

const ReviewElement = ({ data }: { data: IReview }) => {
  return (
    <article className="w-full lg:max-w-sm hover:shadow-sm p-4 rounded-lg bg-slate-50 h-min lg:h-[295px] lg:overflow-y-scroll">
      <header className="flex gap-4 h-14 items-center">
        <img
          className="w-14 h-14 rounded-full bg-cover"
          src={data.profileURL}
          alt={data.name}
        />
        <div>
          <strong>{data.name}</strong>
          <StarRating rating={data.rating} />
        </div>
      </header>
      <p className="p-2 mt-2">{data.text}</p>
    </article>
  )
}

const CommentList = ({
  comments,
  setShowModal,
  lenguage
}: {
  comments: IReview[]
  setShowModal: Dispatch<boolean>,
  lenguage: string
}) => {
  return (
    <div className="fixed top-0 left-0 bg-slate-100/90 flex justify-center items-center w-screen h-screen z-10">
      <div className="flex flex-row-reverse items-start gap-4">
        <button
          className="bg-sky-300 p-2 shadow-2xl rounded-full lg:relative fixed top-2 right-2"
          onClick={() => setShowModal(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="w-full lg:max-w-3xl shadow-sky-300/10 border-2 border-sky-100 p-4 h-screen lg:max-h-[650px] flex bg-slate-50 shadow-2xl rounded-lg flex-col gap-4">
          <strong className="mb-2 mt-2 font-extrabold text-xl">
            {lenguage === "spanish" ? "Todas las opiniones" : "All comments"}
          </strong>
          <section className="overflow-scroll">
            {comments.map((data, index) => (
              <article key={index} className="w-full bg-white-50 p-2 rounded-md border-b-2 border-slate-200">
                <header className="flex gap-4 h-14 items-center">
                  <img
                    className="w-14 h-14 rounded-full bg-cover"
                    src={data.profileURL}
                    alt={data.name}
                  />
                  <div>
                    <strong>{data.name}</strong>
                    <StarRating rating={data.rating} />
                  </div>
                </header>
                <p className="mt-2 mb-4">{data.text}</p>
              </article>
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}
