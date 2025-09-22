import { TrpcProvider } from './lib/trpc'
import { AllPage } from './pages/AllPage'

export const App = () => {

  return (
    <TrpcProvider>
      <AllPage />
    </TrpcProvider>
  )
}