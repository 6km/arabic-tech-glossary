export default function Error() {
  return (
    <div className="flex h-48 flex-col items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 text-center text-red-800 shadow-sm">
      <h3 className="text-xl font-bold">حدث خطأ ما!</h3>
      <p>حدث خطأ ما أثناء تحميل البيانات</p>
    </div>
  )
}
