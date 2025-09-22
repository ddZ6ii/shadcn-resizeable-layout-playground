type AsideProps = React.HTMLAttributes<HTMLDivElement>

export default function Aside({ className, ...restProps }: AsideProps) {
  return (
    <aside className={className} {...restProps}>
      <h1 className="mb-2 text-2xl font-bold">Aside</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        recusandae, tenetur, iusto quod mollitia deserunt vel culpa est nisi
        minus, cumque esse voluptate doloremque ullam! Ducimus, odio voluptatum?
        Sed aspernatur minus soluta veniam veritatis hic officiis blanditiis,
        nisi necessitatibus! Nemo obcaecati cupiditate dignissimos aperiam
        officiis et vero inventore repellendus possimus, eum ex asperiores
        voluptatum rem! Consequatur facere, inventore, non tenetur doloribus
        delectus vel consequuntur nostrum quos aut cum alias! Pariatur tenetur
        sequi, dolor corrupti nostrum, quas culpa quasi, eos blanditiis quia
        dicta sunt recusandae quaerat tempore! Optio quaerat corrupti quos autem
        asperiores repellendus error quisquam cum quasi sunt dolorem
        accusantium, placeat natus, minus dolore, labore corporis laboriosam
        est! Ratione, rem odit? Culpa placeat tempora debitis optio, porro nihil
        tempore vel ratione libero possimus perferendis quam accusamus saepe sed
        eligendi soluta corporis consequuntur quia distinctio aliquam! Amet eos
        libero nisi suscipit id! In dolor iste voluptatem ipsam voluptatum
        aliquam rerum rem, quam nesciunt atque ut natus tempore molestiae! Ab
        laudantium et necessitatibus unde cupiditate minima delectus non
        molestiae. Expedita at ducimus ipsa minima commodi provident mollitia
        quia, itaque rerum, rem recusandae, nam temporibus sit quae sunt quaerat
        perferendis maiores voluptas earum. Cupiditate quas illo laboriosam
        aspernatur repudiandae ex molestiae explicabo dolor.
      </p>
    </aside>
  )
}
