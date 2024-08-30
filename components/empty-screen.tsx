import { UseChatHelpers } from 'ai/react'
import { Article } from '@/components/article'

const exampleMessages = [
  {
    heading: 'Mostra',
    message: `Cosa posso vedere alla mostra"?`
  },
  {
    heading: 'Esibizione',
    message: 'Quando è stata costruita la villa?: \n'
  }
]

const articleMessage = [
  {
    title: 'Ci sono monumenti archeologici?'
  },
  {
    title: 'Parlami della chiesa del posto'
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="flex justify-center">
      <div className="flepb-10 pt-4 md:pt-10">
        <div className="mx-auto max-w-2xl p-10 sm:p-4">
          <div className="rounded-lg bg-transparent pb-4 sm:pb-8">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Benvenuto
              <strong className="font-extrabold text-violet-500 sm:block">
                {' '}
                Cosa vuoi sapere?{' '}
              </strong>
            </h1>
          </div>

          <div className="text-black">
            <p className="mb-6 sm:mb-14 leading-normal text-lg">
              Esplora con me. Chiedimi dei punti di interesse locali e dei
              ritrovamenti più sorprendenti. Posso darti consigli su attività,
              itinerari e altre curiosità sul paese. Dai iniziamo, chiedi pure{' '}
              <b>te lo racconto io!</b>
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mx-auto justify-center px-12 sm:px-0">
          <div className="basis-1/2 pr-0 sm:pr-6 pb-4 sm:pb-0">
            <Article title={articleMessage[0].title} />
          </div>
          <div className="basis-1/2">
            <Article title={articleMessage[1].title} />
          </div>
        </div>
      </div>
    </div>
  )
}
