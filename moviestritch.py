import asyncio
from moviepy.editor import VedioFileClip, concatenate_vedioclips

async def generate_clip(prompt, clip_name):
    print(f"Starting generationn for : {clip_name}")
    await my_ai_vedio_generator(prompt, clip_name)
    print(f"Fininshed : {clip_name}")
    return clip_name

def  stitch_clip(vedio_paths, output):
    print("Received all  the clips Lets join them....")
    clips = [VedioFileClip(path) for path in vedio_paths]
    final_vedio = concatenate_vedioclips(clips, method="compose")
    final_vedio.write_vediofile(output, fps=24, codec="libx264")
    print("Your vedio is generated It is saved at {output}")

async def main_pipeline():
    prompts= [
        ("The rocket launches from Earth", "clip_1.mp4"),
        ("The rocket travels through space", "clip_2.mp4"),
        ("The rocket lands on the moon", "clip_3.mp4")
    ]
    
    tasks = [generate_clip(p[0], p[1]) for p in prompts]
    generated_files = await asyncio.gather(*tasks)
    stitch_clip(generated_files, "Project_2_vedio.mp4")
if __name__ == "__main__":
    asyncio.run(main_pipeline)
