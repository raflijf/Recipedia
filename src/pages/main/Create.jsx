import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

import clsx from "clsx"

import { PhotoIcon } from "@heroicons/react/24/solid"
import { PlusIcon } from "@heroicons/react/24/outline"

import FormInput from "../../components/forms/input/FormInput"
import FormTextArea from "../../components/forms/input/FormTextArea"
import FormSelect from "../../components/forms/input/FormSelect"
import FormInputCreate from "../../components/forms/create_page/field/FormInputCreate"
import FormInputCreateStep from "../../components/forms/create_page/field/FormInputCreateStep"
import PrimaryButton from "../../components/button/PrimaryButton"
import SecondryButton from "../../components/button/SecondryButton"
import BaseModal from "../../components/modal/BaseModal"
import SaveRecipeAttentionModal from "../../components/modal/create/SaveRecipeAttentionModal"


export default function  Create() {
    // drah & drop image 
    const [file, setFile] = useState(null)
    const [isDrag, setIsDrag] = useState(false)
    
    const convertImageToBase64 = (file) => {
        const reader = new FileReader()
        reader.onload = () => {
            const result = reader.result
            console.log(result)
            setFile(result)
        }
        reader.readAsDataURL(file);
    }
    const handleDrop = (e) => {
        e.preventDefault()
        setIsDrag(false)
        const dropped = e.dataTransfer.files[0]
        const type = ['image/jpeg', 'image/png']

        if (type.includes(dropped.type)) { 
            convertImageToBase64(dropped)            
        }
    }
    const handleDragOver = (e) => {
        e.preventDefault()
        setIsDrag(true)
    }
    const handleDragLeave = (e) => {
        e.preventDefault()
        setIsDrag(false)
    } 

    // manupulasi bahan-bahan dan langkah - langkah 
    const defaultAddedFields = { 
        ingredients :  ['%plchdr% 2 sdt garam', '%plchdr% 1 ekor ayam'], 
        steps : ['%plchdr% potonng-potong ayam jadi beberapa bagian', '%plchdr% berikan 2 sdt garam ']
    }
    const [addedFields, setAddedFields] = useState(defaultAddedFields)
    const handleInputIngredient = (idx, value, e) => {
        setAddedFields(prev => {
            const instance = {...prev}
            if (value === 'ingredient') {
                instance.ingredients[idx] = e.target.value
            } else if (value === 'step') {
                instance.steps[idx] = e.target.value
            }
            return instance
        } )
    }
    const handleAddField = (value) => {
        setAddedFields(prev => {
            if (value === 'ingredient') {
                return {ingredients : [...prev.ingredients, ''], steps : [...prev.steps]}
            } else if (value === 'step') {
                return {ingredients : [...prev.ingredients], steps : [...prev.steps, '']}
            }
        })
    }
    const handleDeleteField = (idx, value) => {
        setAddedFields(prev => {
            const instance = {...prev}
            if (value === 'ingredient') {
                instance.ingredients.splice(idx, 1)
            } else if (value === 'step') {
                instance.steps.splice(idx, 1)
            }
            return instance
        })
    }

    // handle data 
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams() 
    const recipesSaved = JSON.parse(localStorage.getItem('recipesSaved')) 
    const idParams = parseInt(searchParams.get('id'))
    const defaultRecipeData = {
        title : '',
        description :'' ,
        servings : '',
        cookTimeMInutes :'' ,
        difficultly : '', 
    }
    const [recipeData, setRecipeData] = useState(defaultRecipeData)
    const handleInput = {
        title : (e) => setRecipeData(prev => ({...prev, title : e.target.value})),
        description : (e) => setRecipeData(prev => ({...prev, description : e.target.value})),
        servings : (e) => setRecipeData(prev => ({...prev, servings : e.target.value})),
        cookTimeMInutes : (e) => setRecipeData(prev => ({...prev, cookTimeMInutes : e.target.value})),
        difficultly : (e) => setRecipeData(prev => ({...prev, difficultly : e.target.value})),
    }
    useEffect(() => {
        if (!recipesSaved || isNaN(idParams)) return
        
        const dataExist = recipesSaved.some(item => item.id === idParams )
        if (!dataExist) {
           return navigate('/recipe/create')
        } 
        const getData = recipesSaved.find(item => item.id === idParams)
        console.log(getData)
        setRecipeData(getData)
        setFile(getData.image)
        setAddedFields(prev => ({...prev, ingredients : getData.ingredients}))
        setAddedFields(prev => ({...prev, steps : getData.steps}))
    }, [idParams])
    
    const handleSaveRecipe = () => {
        let recipesSaved = JSON.parse(localStorage.getItem('recipesSaved')) || []
        const id = recipesSaved ? recipesSaved.length : 0
        const dynamicUpdateData  = {
            ...recipeData, 
            image :  file, 
            ingredients : addedFields.ingredients, 
            steps : addedFields.steps
        }
        if (isNaN(idParams)) {
            dynamicUpdateData['id'] = id 
        } 

        const existting = recipesSaved.some(item => item.id === recipeData.id)
        console.log(existting)
        if (existting) {
            recipesSaved = recipesSaved.map(item => item.id === recipeData.id ? dynamicUpdateData : item)
        } else {
            recipesSaved.push(dynamicUpdateData)
            setSearchParams({id : id})
        }
        localStorage.setItem('recipesSaved', JSON.stringify(recipesSaved))
    }
    const handleReset = () => { 
        if (isNaN(idParams)) {
            setRecipeData(defaultRecipeData)
        } else {
            setRecipeData({...defaultRecipeData, id : idParams})
        }
        setAddedFields(defaultAddedFields)
        setFile(null)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const button = e.nativeEvent.submitter
        if (button.name === 'save') {
            const dontRememberMe = localStorage.getItem('dontRememerMeAttentionSaveRecipe')
            if (dontRememberMe === 'true') {
                handleSaveRecipe()
            } else {
                setShowSaveRecipeAttention(true)
            }
        }
        else if (button.name === 'reset') handleReset() 
    } 
    
    const [showSaveRecipeAttention, setShowSaveRecipeAttention] = useState(false)
    return (
        <div>
            <main>
                <form onSubmit={handleSubmit}  className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto  gap-y-3  ">
                    <div className=" border-black/20  ">
                        <div className={clsx(isDrag ? "border-dashed border-2 border-thirdty rounded-md" : "", "p-3")}>
                            <label 
                                htmlFor="image" 
                                className={clsx(" md:h-80 2xl:h-100 z-0  grid place-items-center rounded bg-[#DCDCDC]  select-none cursor-pointer duration-200 hover:bg-[#d6d6d6] relative", file || "h-60")}
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                            >   
                                {file ? 
                                    <>
                                        <img 
                                            src={file} 
                                            alt="picok" 
                                            className="rounded-lg  w-full  md:h-80 2xl:h-100    aspect-[10/6] lg:aspect-[16/9] object-cover "
                                        />
                                    </>
                                    : 
                                    <div className="flex flex-col items-center ">
                                        <PhotoIcon className="size-15 opacity-75"/>
                                        <h2 className="text-xl font-medium">Foto Resep</h2>
                                        <p className="text-sm ">Tambahkan foto akhir masakan</p>
                                    </div>
                                }
                                <div className="absolute inset-0 z-20" 
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                ></div>
                                {isDrag && 
                                    <div className="absolute inset-0 bg-thirdty/40 backdrop-blur-xs rounded grid place-items-center">
                                        <h2 className="text-4xl font-semibold text-white drop-shadow-md">Drop Here</h2>
                                    </div>
                                }
                            </label>
                            <input 
                                type="file" 
                                id="image"
                                name="image"
                                className="hidden"  
                                multiple={false}
                                onChange={e => convertImageToBase64(e.target.files[0])}
                            />
                        </div>
                    </div>
                    <div className="p-3 flex-col flex gap-2 h-66 md:h-86 ">
                        <FormInput 
                            placeholder={'Nama Masakan'}
                            size="lg"
                            className={'font-bold'}
                            id={"title"}
                            name="title"
                            value={recipeData.title}
                            onChange={handleInput.title}
                        />
                        <FormTextArea 
                            placeholder={'Deskripsi'} 
                            id="description" 
                            name="description"
                            value={recipeData.description}
                            onChange={handleInput.description}
                        />
                    </div>
                    <div className="px-3 flex flex-col gap-3">
                        <h2 className="text-xl  lg:text-2xl  font-semibold ">Bahan - Bahan</h2>
                        <div className="flex  items-center  gap-2 w-60">
                            <label htmlFor="servings" className="text-md font-medium">Porsi</label>
                            <FormInput
                                placeholder="2 orang"
                                size="sm"
                                id="servings"
                                name="servings"
                                value={recipeData.servings}
                                onChange={handleInput.servings}
                            /> 
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                                {addedFields.ingredients.map((itm, idx) => (
                                    <FormInputCreate 
                                        value={addedFields.ingredients[idx]} 
                                        key={idx}
                                        handleInput={(e) => handleInputIngredient(idx, 'ingredient',e)}
                                        handleDelete={() => handleDeleteField(idx, 'ingredient')}
                                        name={`ingredient-${idx}`}
                                    />
                                ))}
                            </div>
                            <div className="flex justify-center ">
                                <button type="button" onClick={() => handleAddField('ingredient')} className="flex items-center gap-2 bg-[#DCDCDC] p-1 px-2 w-fit cursor-pointer hover:bg-[#d6d6d6] duration-200 rounded-xs">
                                    <PlusIcon className="size-3"/>
                                    <span className="text-xs">bahan</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 flex flex-col gap-3">  
                        <h2 className="text-xl  lg:text-2xl  font-semibold ">Langkah - langkah</h2>
                        <div className="flex  max-sm:flex-col gap-3 sm:justify-between sm:items-center  ">
                            <div className="flex w-70 items-center gap-3 ">
                                <label htmlFor="duration" className="text-md font-medium">Durasi</label>
                                <FormInput 
                                    placeholder="1 jam 3 menit" 
                                    name="duration"
                                    id="duration"
                                    size="sm"
                                    value={recipeData.cookTimeMInutes}
                                    onChange={handleInput.cookTimeMInutes}
                                />
                            </div>
                            <div className="w-30">
                                <FormSelect 
                                    size="sm" 
                                    name="difficultly" 
                                    value={recipeData.difficultly} 
                                    onChange={handleInput.difficultly}
                                >
                                    <option value="">Kesulitan</option>
                                    <option value="mudah">Mudah</option>
                                    <option value="sedang">Sedang</option>
                                    <option value="sulit">Sulit</option>
                                </FormSelect>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                                {addedFields.steps.map((itm, idx) => (
                                    <FormInputCreateStep     
                                        value={addedFields.steps[idx]} 
                                        key={idx} 
                                        idx={idx + 1}
                                        handleInput={(e) => handleInputIngredient(idx, 'step',e)}
                                        handleDelete={() => handleDeleteField(idx, 'step')}       
                                        name={`step-${idx}`}   
                                    />
                                ))}
                            </div>
                            <div className="flex justify-center ">
                                <button type="button" onClick={() => handleAddField('step')} className="flex items-center gap-2 bg-[#DCDCDC] p-1 px-2 w-fit cursor-pointer hover:bg-[#d6d6d6] duration-200 rounded-xs">
                                    <PlusIcon className="size-3"/>
                                    <span className="text-xs">langkah</span>
                                </button>
                            </div>
                        </div> 
                    </div>
                    <div className="  w-full lg:col-start-2 px-3 flex flex-row-reverse justify-end gap-3">
                        <PrimaryButton 
                            type="submit"
                            name="post" 
                            size="large"   
                            className={'w-50 '}
                         >
                            Posting
                         </PrimaryButton>
                        <SecondryButton 
                            type="submit"
                            name="save" 
                            size="large" 
                            className={'w-40 '}
                          >
                            Simpan
                        </SecondryButton>
                        <button
                            name="reset"
                            className="border-2 w-40 rounded duration-200 font-semibold cursor-pointer py-1.5 px-4 text-base sm:py-2.5 sm:px-5.5 sm:text-lg border-red-500 text-red-500 hover:bg-red-500/20  "
                        >
                            Hapus
                        </button>
                    </div>
                </form>
            </main>
            <SaveRecipeAttentionModal show={showSaveRecipeAttention} onClose={setShowSaveRecipeAttention} handleSaveRecipe={handleSaveRecipe}/>
        </div>
    )
}