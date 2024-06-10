export default function Error() {
  return (
    <div className="flex h-48 flex-col items-center justify-center gap-2 border border-red-300 bg-red-100 text-center">
      <h3 className="text-xl font-bold text-red-800">حدث خطأ ما!</h3>
      <p className="text-red-800">حدث خطأ ما أثناء تحميل البيانات</p>
    </div>
  )
}
