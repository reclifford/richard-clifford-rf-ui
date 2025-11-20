export default function Item({ imgSrc, title, subcopy, customClass }) {
  return (
    <div
      className={`item ${!title ? "justify-center text-center" : ""} ${
        customClass ? customClass : ""
      }`}
    >
      <div className="flex flex-dir-col gap-4">
        <div
          className={`flex align-center ${imgSrc ? "gap-8" : ""} ${
            !title ? "justify-center" : ""
          }`}
        >
          <div className="img-container">
            {imgSrc ? <img src={imgSrc} alt="" /> : ""}
          </div>
          {title ? <h5>{title}</h5> : ""}
        </div>
        <p>{subcopy}</p>
      </div>
    </div>
  );
}
