import styles from "./listGroup.module.css";

// import "./../../App.css";

interface Props {
  items: string[];
  activeRow: number;
  onActive: (i: number) => void;
}

const ListGroup = ({ items, activeRow, onActive }: Props) => {
  return (
    <section>
      <strong>List Group with css multi css Modules applied to one</strong>
      <br />
      <strong>
        -- use state batch update asynchronous behaviour select below list item
        and check&nbsp;log,
        <mark>
          state is stored outside and varibles are defined to local scope so
          this is y no update to local varible
        </mark>
      </strong>
      <ul
        className={`list-group container p-3 ${[
          styles.pointer,
          styles.hov,
        ].join(" ")}`}
      >
        {items.map((item, i) => (
          <li
            className={
              activeRow === i ? "list-group-item active" : "list-group-item"
            }
            key={item}
            onClick={() => onActive(i)}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ListGroup;
