type RedTitleProps = {
  title: string
  subtitle?: string
}

const RedTitle = ({ title, subtitle }: RedTitleProps): JSX.Element => {
  return (
    <div className="main-title">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
      <style jsx>{`
        .main-title {
          color: #d81c24;
          margin: 10px;
        }

        @media all and (max-width: 1250px) {
          .main-title {
            color: #d81c24;
            margin: 10px;
            text-align: center;
          }
        }

        h1 {
          font-size: 25pt;
          margin: 0;
        }

        p {
          font-size: 20pt;
          margin-top: 5px;
        }
      `}</style>
    </div>
  )
}

export default RedTitle
