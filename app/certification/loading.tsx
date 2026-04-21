export default function CertificationLoading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <div className="inline-block">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-aoi-gold border-opacity-100"></div>
        </div>
        <p className="mt-4 text-aoi-navy font-semibold">Checking your certification access...</p>
      </div>
    </div>
  )
}
