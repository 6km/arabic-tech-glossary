export default function NoData() {
  return (
    <div className="flex h-48 flex-col items-center justify-center gap-2 border border-[#D7DCE2] bg-[#E6EAEF] text-center">
      {/* <span className="select-none text-4xl">×</span> */}
      <h3 className="text-xl font-bold">لا توجد بيانات</h3>
      <p>لم يتطابق بحثك مع أي بيانات</p>
    </div>
  )
}
