import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          FinApp
        </h1>
        <p className="text-slate-600 mb-6">
          Aplicația ta de management financiar personal
        </p>
        <div className="bg-white rounded-lg shadow-lg p-6 border">
          <h2 className="text-xl font-semibold mb-4">Funcționalități</h2>
          <ul className="text-left space-y-2 text-slate-700">
            <li>• Simulator investiții</li>
            <li>• Gestionare buget</li>
            <li>• Tracking obiective</li>
            <li>• Analize financiare</li>
          </ul>
          
          <div className="mt-6">
            <Link 
              href="/simulator" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Încearcă simulatorul
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}