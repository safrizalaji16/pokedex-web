import { useState } from "react";
import { Button, Modal } from "react-daisyui";
import capitalizeFirstLetter from "../helpers/capitalizeFirstLetter";
import padId from "../helpers/padId";
import { TYPE_COLORS } from "../stores/actions/actionType";

export default function Detail({ data, img }) {
  const [visible, setVisible] = useState(false);
  console.log(data);
  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="font-sans">
      <img onClick={toggleVisible} src={img} alt={data.name} className="w-40" />
      <Modal open={visible}>
        <Modal.Header className="font-bold">
          <div className="flex justify-around">
            <div>
              {capitalizeFirstLetter(data.name)}
              <div className="container flex">
                {data.types?.map((el, i) => {
                  return (
                    <div
                      className={
                        "flex justify-center items-center mr-2 py-1 px-1 rounded-md text-white " +
                        TYPE_COLORS[el]
                      }
                      key={i}
                    >
                      <p className="text-sm">{capitalizeFirstLetter(el)}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="font-bold text-xl mb-2 text-center">{`#${padId(
              data.id
            )}`}</div>
          </div>
          <div className="flex justify-center items-center">
            <img width={150} src={img} alt={data.name} />
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="mt-4 shadow-lg grid grid-cols-2 bg-yellow-500 rounded-lg p-2">
            <div className="flex flex-col mt-1">
              <div className="font-medium">Base Experience</div>
              <div className="text-white">{data.base_exp}</div>
            </div>
            <div className="flex flex-col mt-1">
              <div className="font-medium">Height</div>
              <div className="text-white">{data.height + " dm"}</div>
            </div>
            <div className="flex flex-col mt-1">
              <div className="font-medium">Weight</div>
              <div className="text-white">{data.weight + " hg"}</div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Actions>
          <Button onClick={toggleVisible}>Yay!</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
