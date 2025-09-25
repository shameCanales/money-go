import { useSelector, useDispatch } from "react-redux";
import { useActionState } from "react";
import cancel from "../assets/cancel.png";
import mark from "../assets/mark.png";
import Modal from "../ui/Modal";
import { uiActions } from "../store/ui-slice";
import { budgetActions } from "../store/budget-slice";
import { validateMovementForm } from "../util/validation";
import InputField from "../ui/InputField";
import RadioGroup from "../ui/RadioGroup";

export default function NewMovement() {
  const isModalOpen = useSelector((state) => state.ui.addIsOpen);
  const dispatch = useDispatch();
  const movements = useSelector((state) => state.budget.movements);

  function newMovementFunction(prevFormState, formData) {
    const amount = Number(formData.get("amount"));
    const type = formData.get("type");
    const description = formData.get("description");

    //Form Validation from utility
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

    // dispatching
    dispatch(
      budgetActions.addMovement({
        amount: amount,
        type: type,
        description: description,
      })
    );

    dispatch(uiActions.closeAddModal());

    //return errors null if passed test and don't return entered values to reset fields
    return { errors: null };
  }

  const [movementFormState, newMovementAction, pending] = useActionState(
    newMovementFunction,
    { errors: null }
  ); //useActionState is a custom hook that handles the state of the form

  return (
    <Modal isOpen={isModalOpen}>
      <form action={newMovementAction}>
        <div className="header flex justify-between items-center">
          <p className="font-[poppins] font-bold text-2xl text-purple-600">
            New Movement
          </p>
          <button
            type="button"
            onClick={() => dispatch(uiActions.closeAddModal())}
          >
            <img className="w-8" src={cancel} alt="Cancel Button" />
          </button>
        </div>

        <InputField
          label="Amount"
          id="amount"
          name="amount"
          type="number"
          placeholder="1,500"
          min="0"
          defaultValue={movementFormState.enteredValues?.amount ?? ""}
        />

        {movements.length > 0 ? (
          <RadioGroup
            name="type"
            inputLabel="Movement Type:"
            options={[
              { value: "deposit", label: "Deposit" },
              { value: "withdraw", label: "Withdraw" },
            ]}
            defaultValue={movementFormState.enteredValues?.type}
          />
        ) : (
          <>
            <RadioGroup
              name="type"
              inputLabel="Movement Type:"
              options={[{ value: "deposit", label: "Deposit" }]}
              defaultValue={movementFormState.enteredValues?.type}
            />
          </>
        )}

        <InputField
          label="Description"
          id="description"
          name="description"
          type="text"
          placeholder="e.g. Pagupit, Gasolina, Meryenda"
          defaultValue={movementFormState.enteredValues?.description ?? ""}
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
            {movementFormState.errors && `Ohh Nooooo :(`}
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
  );
}
