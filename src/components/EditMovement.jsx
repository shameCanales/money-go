import { useDispatch, useSelector } from "react-redux";
import { useActionState } from "react";
import cancel from "../assets/cancel.png";
import mark from "../assets/mark.png";
import Modal from "../ui/Modal";
import { uiActions } from "../store/ui-slice";
import { validateMovementForm } from "../util/validation";
import InputField from "../ui/InputField";
import RadioGroup from "../ui/RadioGroup";
import { budgetActions } from "../store/budget-slice";

export default function EditMovement() {
  const dispatch = useDispatch();
  const isEditModalOpen = useSelector((state) => state.ui.editIsOpen);
  const currentIdToEdit = useSelector((state) => state.ui.currentIdtoEdit);
  const movements = useSelector((state) => state.budget.movements);
  const selectedMovement = movements.find(
    (movement) => movement.id === currentIdToEdit
  );

  function editMovementFunction(prevFormState, formData) {
    const amount = Number(formData.get("amount"));
    const type = formData.get("type");
    const description = formData.get("description");

    const errors = validateMovementForm({ amount, type, description });

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          amount,
          type,
          description,
        },
      };
    }

    dispatch(
      budgetActions.editMovement({
        amount: amount,
        type: type,
        description: description,
        id: currentIdToEdit,
        date: selectedMovement.date,
        time: selectedMovement.time,
      })
    );

    dispatch(uiActions.closeEditModal());
    return { errors: null };
  }

  const [movementFormState, editMovementAction, pending] = useActionState(
    editMovementFunction,
    { errors: null }
  ); //useActionState is a custom hook that handles the state of the form

  return (
    <>
      <Modal isOpen={isEditModalOpen}>
        <form action={editMovementAction}>
          <div className="header flex justify-between items-center">
            <p className="font-[poppins] font-bold text-2xl text-purple-600">
              Edit Movement:
            </p>

            <button
              type="button"
              onClick={() => dispatch(uiActions.closeEditModal())}
            >
              <img className="w-8" src={cancel} alt="Cancel Button" />
            </button>
          </div>

          <InputField
            label="Amount"
            id="amount"
            name="amount"
            type="number"
            placeholder="placeholder"
            min="0"
            defaultValue={
              movementFormState.enteredValues?.amount ??
              selectedMovement?.amount ??
              ""
            }
          />

          <RadioGroup
            name="type"
            inputLabel="Movement Type:"
            options={[
              { value: "deposit", label: "Deposit" },
              { value: "withdraw", label: "Withdraw" },
            ]}
            defaultValue={
              selectedMovement?.movementType ??
              movementFormState.enteredValues?.type
            }
          />

          <InputField
            label="Description"
            id="description"
            name="description"
            type="text"
            placeholder="e.g. Pagupit, Gasolina, Meryenda"
            defaultValue={
              movementFormState.enteredValues?.description ??
              selectedMovement?.desc ??
              ""
            }
          />

          <button
            disabled={pending}
            type="submit"
            className="mt-6 poppins-medium bg-purple-600 text-stone-100 w-full p-3 rounded-4xl"
          >
            {pending ? "Saving" : "Save Entry"}
          </button>

          <ul className="mt-6 ">
            <p className="poppins-bold">
              {movementFormState.errors && `Ohh Noooo :(`}
            </p>
            {movementFormState.errors?.map((error) => (
              <li key={error} className="flex items-center gap-1 mt-3">
                <img src={mark} alt="Error indicator" className="w-5 h-5" />
                <p className="poppins-light">{error}</p>
              </li>
            ))}
          </ul>
        </form>
      </Modal>
    </>
  );
}
