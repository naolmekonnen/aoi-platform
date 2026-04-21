import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase/server'

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: resultId } = await params
    if (!resultId) {
      return NextResponse.json({ error: 'Result ID is required' }, { status: 400 })
    }

    const supabase = await createServerSupabase()
    const { data: result, error } = await supabase
      .from('quiz_results')
      .select(`
        id,
        score,
        level,
        awareness_score,
        business_score,
        prompt_score,
        workflow_score,
        answers_json,
        created_at,
        profiles (
          first_name,
          last_name,
          email,
          job_title,
          company
        )
      `)
      .eq('id', resultId)
      .single()

    if (error || !result) {
      return NextResponse.json({ error: 'Result not found' }, { status: 404 })
    }

    return NextResponse.json({
      id: result.id,
      totalScore: result.score,
      level: result.level,
      dimensionScores: {
        'AI Awareness': result.awareness_score,
        'Business Application': result.business_score,
        'Prompt Proficiency': result.prompt_score,
        'Workflow Readiness': result.workflow_score,
      },
      answers: result.answers_json,
      createdAt: result.created_at,
      profile: result.profiles,
    })
  } catch (error) {
    console.error('Error fetching result:', error)
    return NextResponse.json(
      { error: 'Failed to fetch result' },
      { status: 500 }
    )
  }
}
