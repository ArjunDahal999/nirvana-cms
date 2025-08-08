'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Crown, Phone, Mail, Clock, ArrowRight, User, UserCheck } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { AuroraText } from '../../_components/ui/gradient-text'
import { ConfettiStars } from '../../_components/ui/confetti'

export default function MembershipPage() {
  return (
    <div className=" ">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary/10 text-black">
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary p-4 rounded-full">
                <Crown className="h-12 w-12 text-yellow-300 " />
              </div>
            </div>
            <Badge className="mb-6 bg-primary text-yellow-300 border-yellow-300">
              Exclusive Membership Program
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 ">
              Join NPWC
              <AuroraText>
                <span className=" px-2">Membership</span>
              </AuroraText>
            </h1>
            <p className="text-xl md:text-2xl  max-w-4xl mx-auto mb-8 leading-relaxed">
              Unlock exclusive benefits, priority care, and significant savings on all our
              physiotherapy and wellness services as a valued member of Nirvana Physiotherapy &
              Wellness Center.
            </p>
            <ConfettiStars />
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="pt-20  ">
        <div className=" mx-auto md:px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800">Join Today</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Membership Application</h2>
            <p className="text-xl text-gray-600">
              Complete the form below to start your journey towards better health and exclusive
              member benefits.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
